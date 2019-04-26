import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
 
class Projects extends React.Component {
    state = {
        projects: {},
        name: '',
        id: '',
        description: ''
    }

    // componentDidMount() {
    //     axios
    //       .get('https://users-posts-app.herokuapp.com/api/users')
    //       .then(res => {
    //         this.setState({
    //           projects: res.data
    //         })
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //   }
    
      changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
      }
    
      getData = (e) => {
        e.preventDefault()
        axios
          .get(`http://localhost:4000/api/projects/${this.state.id}`)
          .then(res => {
            console.log(res)
            this.setState({
              projects: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
      }
    
      addPost = (e) => {
        e.preventDefault()
        axios
          .post(`http://localhost:4000/api/projects`, {name: this.state.name, description: this.state.description})
          .then(res => {
            console.log(res)
            // this.getData();
          })
          .catch(err => {
            console.log(err)
          })
        this.setState({
          name: '',
          description: ''
        })
      }
    
      deletePost = (e) => {
        e.preventDefault()
        console.log(e.target.id)
    
        axios
          .delete(`http://localhost:4000/api/projects/${this.state.id}`)
          .then(res => {
            console.log(res)
            // this.getData();
            this.setState({
              projects: {}
            })
          })
          .catch(err => {
            console.log(err)
            // this.getData();
          })
      }
    
      updatePost = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        axios
          .put(`https://users-posts-app.herokuapp.com/api/users/${e.target.id}`, {name: this.state.name})
          .then(res => {
            console.log(res)
            // this.getData()
            this.setState({
              name: ''
            })
          })
          .catch(err => console.log(err))

      }


    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.description}
                        onChange={this.changeHandler}
                    />
                    <button onClick={this.addPost}>Add Project</button>
                    <br/>
                    <input
                      type="number"
                      name="id"
                      placeholder="id"
                      value={this.state.id}
                      onChange={this.changeHandler}
                    />
                    <button onClick={this.getData}>Get Project</button>
                </form>
                    <div>
                        {/* <Link to={`api/projects/${project.id}`}></Link> */}
                        <h2>{this.state.projects.name}</h2>
                        <h2>{this.state.projects.description}</h2>
                        <h2>{this.state.projects.completed}</h2>
                        <button onClick={this.deletePost} id={this.state.projects.id}>Delete</button>
                        <button onClick={this.updatePost} id={this.state.projects.id}>Update</button>
                    </div>
                
            </div>
        )
    }
}

export default Projects;