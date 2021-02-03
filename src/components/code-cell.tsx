import { useState } from "react";
import CodeEditor from './code-editor';
import Preview from './preview'
import bundle from '../bundler/index'
// Another task is the bundling in-Browser process;
//whenever we see the import statements in the given code we have to to get access to those packages;
// 1) Now the there is option to to create a server API to and we ask them to always request a package whenever there is a import statet=ment;
// 2) But another option is to do in-Browser bundling;
//  and this is done by going to the specific package's index.js file(the package we want to import) and downloading that package;
// 3) Now, to download some npm package directly from the browser we will face some cors error and to get rid of those error we will use some third party called 'unpkg.com/{package name}'

const CodeCell = () => {
    const [input,setInput] = useState('');
    const [code,setCode] = useState('');

    // the problem here is  that currently we want the service function gets triggered when we click subkit
    // therefore we will use 'useRef' to get function from outside 
    // and now we can access the service function by using 'ref.current'
    const onClick = async () => {
        const output = await bundle(input);
        setCode(output); // here we used to change the state of code when it is bundled
        // bundled code is in the code state
    };

 
    return (
        <div>
            <CodeEditor 
                initialValue="// Work on your Project Over Here "
                onChange = {(value) => setInput(value)}
            />
            <div>
                <button onClick={onClick}>
                    Submit 
                </button>
            </div>
            {/* <pre>{code}</pre>  */}
            <Preview code={code}/>
        </div>
    );
}

export default CodeCell;