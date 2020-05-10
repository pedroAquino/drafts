import { Machine } from "xstate";

const Board = () => {
  return [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
};

const initialState = Board();

const ticTacToaMachine =  Machine({});