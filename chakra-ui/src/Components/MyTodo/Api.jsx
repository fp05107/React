import axios from "axios";

export const getTodos = () => {
  return axios.get(`http://localhost:4000/tasks`);
};

export const addTodos = (data = {}) => {
  return axios.post(`http://localhost:4000/tasks`, {
    "id": data.id,
    "timestamp": data.timestamp,
    "title": data.title,
    "description": data.description,
    "dueDate": data.duedate,
    "tag": data.tag,
    "status": data.status,
  });
};
// export const getTodos = (params = {}) => {
//     return axios.get(
//       `http://localhost:3003/todos?_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}`
//     );
//   };

//   export const addTodos = ( data = {} ) => {
//       return axios.post(`http://localhost:3003/todos`,{
//           id:data.id,
//           title:data.title,
//           status:data.status
//       });
//   }
