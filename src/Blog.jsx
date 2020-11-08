import React from 'react'
import Article from './Article'
import * as FooBar from './components/FooBar'
import Hoge from './components/Hoge'

const Blog = () => {

  

  // componentDidMount(){
  //   //ボタンがクリックされたらイイねをカウントアップする
  //   document.getElementById('counter').addEventListener('click',this.countUp)
  // }

  // componentDidUpdate(){
  //   //イイねが10以上になると0にもどる
  //   if (this.state.count >= 10){
  //     this.setState({count:0})
  //   }
  // }

  // componentWillUnmount(){
  //   document.getElementById('counter').removeEventListener('click',this.countUp)
  // }

  //公開状態を反転させる関数

  // countUp = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  
    return(
      <React.Fragment>
        <Article 
          title="古代樹の森"
          // count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </React.Fragment>
    )

}

export default Blog