import React, { useEffect, useState } from 'react'
import {LayoutManageSafeBox} from '../../components/LayoutManage'
import {CardFull} from '../../components/Card'
import {  FlatList } from 'react-native';
import { TodoInput } from '../../components/InputFilter';
import { ModalDetails } from '../../components/Modal';
import Pagination from "../../class/pagination";


export default function HomeScreen() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(0)
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


  const pagination = async () => {
    setPage(page +1)
    let dados:any = await Pagination.simulaBackend(page,5)
    setData(dados.items)
  }
 
  
  const renderItem = ({item}:any) => <CardFull description={item} visible={setVisible}  />

  useEffect(() => {
    pagination()
  },[]);


  useEffect(() => {
    if(filter !== "") {
      let result:any = data.filter(item => item.name.includes(filter) )
      setData(result)
    } else {
      pagination()
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
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
       />
       <ModalDetails startVisible={startVisible} setVisible={setVisible}></ModalDetails>
    </LayoutManageSafeBox>
  )
}
