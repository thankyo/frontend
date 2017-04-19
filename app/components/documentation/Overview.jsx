import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form';

class Intro extends Component {
    render() {
        return (
            <div>
                <p className="title is-4">LoveIt Button for the Web</p>
                <p>
                    A single click on the LoveIt button will 'love' pieces of content on the web and send a small tip to the owner.
                </p>
            </div>
        )
    }
}

class StepByStep extends Component {
    render() {
        return (
            <div>
                <p className="title is-4">Step-by-Step</p>
                <ol>
                    <li className="subtitle">
                        Choose URL or Page<br/>
                        <small>Pick the URL of a website you want to use with the love button.</small>
                    </li>
                    <li className="subtitle">
                        Code Generator<br/>
                        <small>Paste the URL to the code generator. Click the Get Code button to generate your LoveIt button code.</small>
                    </li>
                    <li className="subtitle">
                        Copy & Paste HTML snippet<br/>
                        <small>Copy and past the snippet into the HTML of the destination website.</small>
                    </li>
                </ol>
            </div>
        )
    }
}

const renderField = (field) => (
    <p className={field.expanded ? "control is-expanded" : "control"}>
        <input className="input" {...field.input} type="text" autoComplete={false} placeholder={field.placeholder}/>
        {field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </p>
)

class CodeGenerator extends Component {
    render() {
        const handleSubmit = function(values) {
            console.log(values)
        };
        return (
        <div>
            <p className="title is-4">Code Generator</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url" className="label">URL to LoveIt</label>
                <div className="field has-addons">
                    <Field name="url" component={renderField} type="text" placeholder="URL" expanded={true}/>
                    <p className="control">
                        <span className="button is-info">
                            Get Code
                        </span>
                    </p>
                </div>
            </form>
        </div>
        )
    }
}

// Decorate the form component
CodeGenerator = reduxForm({
    form: 'codeGenerator' // a unique name for this form
})(CodeGenerator);


export default class Overview extends Component {
    render() {
        return (
            <div className="section container">
                <div className="content">
                    <Intro/>
                    <hr/>
                    <StepByStep/>
                    <hr/>
                    <CodeGenerator/>
                </div>
            </div>
        );
    }
}