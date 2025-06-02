import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from './BooleanVariables';
import IfElse from './IfElse.tsx';
import TernaryOperator from './TernaryOperator.tsx';
import ConditionalOutputIfElse from './ConditionalOutputIfElse.tsx';
import ConditionalOutputInline from './ConditionalOutputInline.tsx';
import LegacyFunctions from './LegacyFunctions.tsx';
import ArrowFunctions from './ArrowFunctions.tsx';
import ImpliedReturn from './ImpliedReturn.tsx';
import TemplateLiterals from './TemplateLiterals.tsx';
import SimpleArrays from './SimpleArrays.tsx';
import ArrayIndexAndLength from './ArrayIndexAndLength.tsx';
import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays.tsx';
import ForLoops from './ForLoops.tsx';
import MapFunction from './MapFunction.tsx';
import FindFunction from './FindFunction.tsx';
import { fourIndex, string3Index } from './FindIndex.tsx';
import FilterFunction from './FilterFunction';
import JsonStringify from './JsonStringify.tsx';
import House from './House.tsx';
import TodoItem from './todos/TodoItem.tsx';
import Spreading from './Spreading.tsx';
import Destructing from './Destructing';
import FunctionDestructing from './FunctionDestructing';
import DestructingImports from './DestructingImports';
import Classes from './Classes';
import Styles from './Styles';
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from './AddPathParameters';
import PathParameters from './PathParameters';

import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  console.log('Hello World!');
  console.log(fourIndex);
  console.log(string3Index);
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />


      <VariablesAndConstants />
      
      <VariableTypes />
      
      <BooleanVariables />
      
      <IfElse />
      
      <TernaryOperator />
      
      <ConditionalOutputIfElse />
      
      <ConditionalOutputInline />
      
      <LegacyFunctions />
      
      <ArrowFunctions />
      
      <ImpliedReturn />
      
      <TemplateLiterals />
      
      <SimpleArrays />
      
      <ArrayIndexAndLength />
      
      <AddingAndRemovingToFromArrays />
      
      <ForLoops />
      
      <MapFunction />
      
      <FindFunction />
      
      <FilterFunction />
      
      <JsonStringify />
      
      <House />
      
      <TodoItem />
      
      <Spreading />
      
      <Destructing />
      
      <FunctionDestructing />
      
      <DestructingImports />
      
      <Classes />
      
      <Styles />

      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>

      <AddPathParameters />
      
      <PathParameters />
    </div>
  );
}
