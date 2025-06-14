import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

interface ITodo {
  id:number;
  name:string;
}
export default function App() {

  const [todo, setTodo] = useState("")
  const [listTodo, setListTodo] = useState<ITodo[]>([])


  function randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo =() => {
    if(!todo) return alert("Hay nhap ten");
    setListTodo([...listTodo,{id:randomInteger(2,100), name:todo}]);
    setTodo("");
  }
  
  return (
    <View style={styles.container}>
      {/* {header} */}
      <Text style={styles.header}>To do APP</Text>
      {/* form */}
      <View>
        <TextInput 
        style={styles.todoInput}
        value={todo}
        onChangeText={(value)=>setTodo(value)} />
        <Button
        title='ADD TODO'
        onPress={handleAddTodo} />
      </View>
      {/* list todo */}
      
      <FlatList
      data={listTodo}
      keyExtractor={item=>item.id+""}
      renderItem={({item})=>{
        return (
          <Text style={styles.todoItem}>{item.name}</Text>
        )
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"orange",
    paddingHorizontal:20,
    textAlign:"center",
    fontSize:40
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:50,
    
  },
  todoInput:{
    borderWidth:1,
    borderBlockColor:"black",
    padding:10,
    margin:15
  },
  todoItem:{
    fontSize:20,
    marginBottom:15,
    borderWidth:1,
    padding:5,
    borderColor:"blue",
  }
  
});
