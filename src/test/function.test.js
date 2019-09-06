import {add} from './functions';
import { exportAllDeclaration } from '@babel/types';


test('add', () => {
    const value = add(1,2);
    expect(value).toBe(3);
})