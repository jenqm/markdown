import { useState } from 'react'
import './App.css'
import {marked} from 'marked'

const defaultMarkdown = 
`# Try it!

## This is a subtitle. The number of hashtags determines the header level.

###### you can use up to 6 hashtags - if you can read this small
<br>

This is _italics_, this is **bold**, and this is ~~strikethrough~~.

<br>

This is how you stylize [a link](https://github.com/)

<br>

Use backticks \`\` for inline code. Like this: \`let sum = a + b\`


For code block, enclose the code in 3 backticks:

\`\`\`
const test = 'hello';
const other = 'world';
console.log(test, other);
\`\`\`

<br>

There are 2 options for lists:

- This is a list item.
- This list is unordered.

1. This is a list item.
2. This list is ordered.

<br>

The quote 
> Somewhere, something incredible is waiting to be known 

has been ascribed to Carl Sagan.

<br>


![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png) 

`
marked.setOptions({
  breaks: true
})

function App() {
  const [text, setText] = useState(defaultMarkdown)

  function handleChange(event) {
    setText(event.target.value);
  }


  return (
    <div id='app'>
      <h1>React Markdown App</h1>
      <div id='container'>
        <textarea 
          id='editor'
          value={text}
          placeholder="text"
          onChange={handleChange}
          name="text"
        />
        
        <div 
          id='preview'
          dangerouslySetInnerHTML={{__html: marked(text)}}
          >
        </div>    
      </div>
    </div>
  );
}

export default App
