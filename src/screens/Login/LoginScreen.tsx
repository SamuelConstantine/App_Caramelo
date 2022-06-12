import React, { useState } from 'react'
import * as Yup from 'yup'
import Button from '../../components/Button'
import DialogMessage from '../../components/Dialog'
import Logo from '../../components/Logo';
import {
  Input,
  Title,
  ViewContext,
  TextWelcome,
  TextError,
} from '../../Styles/LoginStyle'

import { Body } from '../../Styles/StylesUtils'

import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native';

const loginData = {
  email: 'caramelo.teste@gmail.com',
  password: 'Caramelo123'
}

export default function LoginScreen({  }) {
  const navigation = useNavigation()
  
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState({title: '', message:''});

  
  const signIn = async (values: any) => {
    const {email, password} = values
    if (email === loginData.email && password === loginData.password) {
      navigation.navigate('HomeScreen')
    } else {
      setVisible(true)
      setError({title: 'Erro ao efetuar o Login!', message:'Usuario ou senha estão incorretas. Tente novamente'})
    }
    //// Codigo para fazer uma requisição real em uma API 

    // if (values.email !== '') {
    //   await axios
    //     .post('https://48dc-2804-248-f612-d100-b848-44a7-2f31-499f.sa.ngrok.io/api/login', values)
    //     .then(async function (response) {
    //       console.log('response', response.data)
    //       if (response.data.success === true) {
    //           console.log("response.data.token", response.data.token)
    //           await  AsyncStorage.setItem('TOKEN', response.data.token)
    //           navigation.navigate('Home')
              
    //       }
    //     })
    //     .catch(error => {
    //       const { success, message } = error;
    //     })
    // }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email não é valido')
          .max(255)
          .required('Email é obrigatório'),
        password: Yup.string().max(255).required('Senha é obrigatória'),
      })}
      onSubmit={(values) => signIn(values)}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldTouched,
        touched,
        values,
      }) => (
        <Body>
          <ViewContext>
            <Logo></Logo>
            <TextWelcome>Bem-vindo!</TextWelcome>
            <Title>FAÇA SEU LOGIN</Title>
            <Input 
              placeholder="E-mail"
              placeholderTextColor={touched.email && errors.password ? '#de1536' : '#017c68'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              style={{ borderColor: touched.email && errors.email ? '#de1536' : '#017c68' }}
            />
            {touched.email && errors.email && <TextError>{errors.email}</TextError>}
            <Input
              placeholder="Senha"
              secureTextEntry
              placeholderTextColor={ touched.password && errors.password ? '#de1536' : '#017c68'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              style={{ borderColor:  touched.password && errors.password ? '#de1536' : '#017c68' }}
            />
            {touched.password && errors.password && <TextError>{errors.password}</TextError>}
            <Button description="Login" onPress={handleSubmit}>
              Login
            </Button>
          </ViewContext>
          <DialogMessage status={visible} message={error.message} title={error.title} setState={setVisible} ></DialogMessage>
        </Body>
      )}
    </Formik>
  )
}
