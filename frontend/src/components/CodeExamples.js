import React from "react";

const CodeExamples = () => {
  return (
    <div className="border border-slate-700 rounded px-6 pb-6 pt-10 bg-slate-600 mt-6 w-full h-full">
      <h1 className=" text-2xl font-bold text-blue-400">Code Examples</h1>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Python</h3>
      <div className="border border-slate-400 rounded">
        <pre className="p-4 rounded text-white max-w-full overflow-x-auto md:max-w-lg lg:max-w-2xl">
          <code>
            {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
          </code>
        </pre>
      </div>
      <h3 className="text-xl font-bold text-blue-400 mt-7">
        JavaScript (Node.js)
      </h3>
      <div className="border border-slate-400 rounded">
        <pre className="p-4 rounded text-white max-w-full overflow-x-auto md:max-w-full lg:max-w-full">
          <code>{`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
.then(response => {
    console.log("Book generation started. Job ID: " + response.data.job_id);
})
.catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
});`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeExamples;
