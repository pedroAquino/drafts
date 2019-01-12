import update from './Update';
import view from './View';
import model from './Model';
import app from './App';

const node = document.getElementById('app');

app(model, update, view, node);
