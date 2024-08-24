const Button = props => {
  //  Write your code here.
  const {text, className} = props
  return <button className={className}> {text} </button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='title'> Social Buttons </h1>
    <div className='buttons-container'>
      <Button text='Like' className='like-bg' />
      <Button text='Comment' className='comment-bg' />
      <Button text='Share' className='share-bg' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
