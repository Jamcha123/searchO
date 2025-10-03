#SearcherO - An NPM package for Searching and Summaries.

SearcherO allows you to summarize different searches from different search engines.

for example, searching "US politics" or "Economic news" will get searches from multiple search engines and then it will summarize all the searches using perplexity's api.

it also gives you a list of websites it searched.

how to use: 

    1. Get the API key from the SearcherO dashboard (it ): https://searcho-41dad.web.app

    2. npm i searchero

    3. import SearcherO from 'searchero'

    4. comst obj = new SearcherO({api-key: <your api-key from the dashboard>})

list of functions: 

    1. const searches = await obj.search(<search query>)

    2. const summaries = await obj.summary(<search query>)

list of search engines SearcherO uses: 

    1. Google Search API

    2. Brave Search API

    3. Ollama Search API 

    4. Perplexity Search API 

pricing: 

    1. search API pricing $0.10 per request

    2. summary API pricing $0.20 per request

    P.S you get a free $1 credit

