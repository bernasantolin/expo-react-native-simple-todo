import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        padding:50
    },
    inputContainer:{
        gap:5,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textInput:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        paddingLeft:20,
        width:'75%',
        borderRadius: 60,
        borderColor: '#C0C0C0',
    },
    addBtn: {
        width: 80,
        height: 50,
        borderRadius: 60,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    textBtn: {
        color: "#FFF"
    },
    list: {
        marginTop:20,
    },
    listItemContainer: {
        padding:10,
        borderColor:'black',
        borderWidth:1,
        marginTop:5,
        marginBottom:5,
        borderRadius: 60,
        display:"flex",
        flexDirection:"row",
        borderColor: '#C0C0C0',
        alignItems:"center",
        justifyContent:"space-between",
    },
    btnContainer: {
        gap:5,
        display:"flex",
        flexDirection:"row",
        borderColor: '#C0C0C0',
        alignItems:"center",
        justifyContent:"space-between",
    },
    elevation: {
        elevation: 1,
        shadowColor: '#52006A',
    },
    edit:{
        height:30,
        width:20,
        position:"relative",
        right:15,
        fontSize:20
    },
    remove:{
        height:20,
        width:20,
        position:"relative",
        right:15
    },

    taskContainer: {
        display:"flex",
        flexDirection: 'row',
        alignItems:"center",
        marginBottom: 5,
    },
    taskText: {
        marginLeft: 10,
        fontSize: 18,
        flexDirection:"row",
        width: 270,
    },
});
