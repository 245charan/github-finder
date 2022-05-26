import { createContext } from "react";

const GithubContext = createContext();

const REACT_APP_GITHUB_URL = {process.env.REACT_APP_GITHUB_URL}
const REACT_APP_GITHUB_TOKEN = {process.env.REACT_APP_GITHUB_TOKEN}