import  styled  from 'styled-components'; 

export const Container=styled.div` 
.task {
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  padding: 1em;
}

.details {
  text-align: left;
}

.details h4 {
  font-size: 1.2em;
  margin-bottom: 1em;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.actions i {
  margin-bottom: 0.5em;
  font-size: 1.2em;
  cursor: pointer;
  background-color: #282c34;
  color: #fff;
  padding: 0.4em;
  transition: 0.5s;
}

.actions i:hover {
  color: #61dafb;
}

`