import {API_BASE_URL,BEARER_TOKEN} from './config';
import queryString from 'query-string'
import React from "react";
import env from "react-dotenv";

export function get(path, queryParams){
const query = queryString.stringify(queryParams);
return fetch('${API_BASE_URL} ${Path}?${query}'),{
    headers:{
        Authorizations:`Bearer ${BEARER_TOKEN}`,
        Origin:`localhost`,
        withCredential: true
    }
    }
}
