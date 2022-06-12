import React, { useEffect, useState } from 'react'
import {LayoutManageSafeBox} from '../../components/LayoutManage'
import {CardFull} from '../../components/Card'
import {  FlatList } from 'react-native';
import { TodoInput } from '../../components/InputFilter';
import { ModalDetails } from '../../components/Modal';

const DATA = [
  {
    id: 1,
    name: 'Cheeatara',
    image: 'https://www.zoetis.com.br/prevencaocaesegatos/_assets/img/zoe_0010-18j_imagem_destaque_texto7.jpg',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
  {
    id: 2,
    name: 'Cris',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg',
    descripition: 'cahorinho fofo',
    age: '1 ano e 3 meses'

  },
  {
    id: 3,
    name: 'Smoke',
    image: 'https://pixnio.com/free-images/2017/09/26/2017-09-26-07-58-11.jpg',
    descripition: 'Gato preguiçoso',
    age: '2 ano e 1 meses'

  },
  {
    id: 4,
    name: 'Cheeatara',
    image: 'https://www.zoetis.com.br/prevencaocaesegatos/_assets/img/zoe_0010-18j_imagem_destaque_texto7.jpg',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
  {
    id: 5,
    name: 'Cris',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg',
    descripition: 'cahorinho fofo',
    age: '1 ano e 3 meses'

  },
  {
    id: 6,
    name: 'Smoke',
    image: 'https://pixnio.com/free-images/2017/09/26/2017-09-26-07-58-11.jpg',
    descripition: 'Gato preguiçoso',
    age: '2 ano e 1 meses'

  },
  {
    id: 7,
    name: 'Cheeatara',
    image: 'https://www.zoetis.com.br/prevencaocaesegatos/_assets/img/zoe_0010-18j_imagem_destaque_texto7.jpg',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
  {
    id: 8,
    name: 'Cris',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg',
    descripition: 'cahorinho fofo',
    age: '1 ano e 3 meses'

  },
  {
    id: 9,
    name: 'Smoke',
    image: 'https://pixnio.com/free-images/2017/09/26/2017-09-26-07-58-11.jpg',
    descripition: 'Gato preguiçoso',
    age: '2 ano e 1 meses'

  },
  {
    id: 10,
    name: 'PORquinho',
    image: 'https://s2.glbimg.com/8qQaOWnbLuQlFDmGrxxacIgaJ0U=/0x601:4000x5151/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/a/8/M5WNmtSk2LxbwGD4yxcw/chubbyq.jpg',
    descripition: 'Uma gatinha muito carinhosa',
    age: '1 ano e 5 meses'
  },
];


export default function HomeScreen() {
  const [data, setData] = useState(DATA)
  const [filter, setFilter] = useState('')
  const [startVisible, setVisible] = useState({
    visible:false,
    data:{
      age: '',
      descripition: '',
      id: '',
      image: '',
      name:  '',
  }
  })

  const pagination = () => {
    
    // Um exemplo de uma ocasião real seria 
    // poderia criar um estado |const [page, setPage] = useState(1) | na hora da requisição mando a primeira pagina quando chegar na função onEndReached coloco +1 no meu estado 
    // ai passo a página  2 para API e concateno o retorno

    // await axios.get(`exemplo/pagination/?firstPage=${page}`,).then(
    //   function (response) {
    //     const { data } = response;
    //     setData(page === 1 ?  data : data.cancat(data))
    //   });
    
    /// como não estou usando requisição em um api eu fiz so um concat para assim qque chegar no final da lista ele recarregar mais 10


    let newitem = data.concat(DATA)
    setData(newitem)

  }
  
  const renderItem = ({item}:any) => <CardFull description={item} visible={setVisible}  />

  useEffect(() => {
    if(filter !== "") {
      let result = DATA.filter(item => item.name.includes(filter) )
      setData(result)
    } else {
      setData(DATA)
    }
  }, [filter]);

  return (
    <LayoutManageSafeBox goback={false} title={'Home'} right={true}>
       <TodoInput filterInput={setFilter}/>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        onEndReached={pagination}
        onEndReachedThreshold={0.4}
        // keyExtractor={item => item.id}
       />
       <ModalDetails startVisible={startVisible} setVisible={setVisible}></ModalDetails>
    </LayoutManageSafeBox>
  )
}
