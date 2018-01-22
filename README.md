# react-input-field-with-label

A nifty input field and label for React.

## Installation

  ```bash
  npm install react-input-field-with-label --save
  ```
  or
  ```bash
  yarn add react-input-field-with-label
  ```

## Usage

```js
import InputField from 'react-input-field-with-label'

class App extends Component {
  constructor(){
    super()
    this.someFunction = this.someFunction.bind(this)
  }

  someFunction(e){
    e.preventDefault()
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <InputField
          label={'Full name'}
          getFieldInput={(e) => this.someFunction(e)}
          placeholder={'Luke Skywalker'}
          inputFieldStyling={'inputClass'}
          labelStyling={'labelClass'}
        />
      </div>
    );
  }
}

export default App;
```

### InputField Stying
CSS class names should be applied to both inputFieldStyling and labelStyling.

#### InputField props

| Props              | Default values | Possible values                          |
| -------------------| --------------| ------------------------------------------|
| label              | none          | string                                    |
| -------------------| --------------| ------------------------------------------|
| getFieldInput      | null          | function                                  |
| -------------------| --------------| ------------------------------------------|
| placeholder        | none          | string                                    |
| -------------------| --------------| ------------------------------------------|
| inputFieldStyling  | none          | string                                    |
| -------------------| --------------| ------------------------------------------|
| labelStyling       | none          | string                                    |