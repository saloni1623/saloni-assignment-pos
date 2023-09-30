
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

// Creates a fake DOM environment
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// Sets global variables 
global.window = window;
global.document = window.document;
