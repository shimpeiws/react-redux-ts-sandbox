import * as React from "react";
import { CounterState } from "./module";
import { ActionDispatcher } from "./Container";
import { ComponentWithChildren } from "../components/ComponentWithChildren";
import { BasicComponent } from "../components/BasicComponent";

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {
  render() {
    return (
      <ComponentWithChildren width={1280}>
        <BasicComponent num={this.props.value.num} />
        <button onClick={() => this.props.actions.increment(3)}>
          Increment 3
        </button>
        <button onClick={() => this.props.actions.decrement(2)}>
          Decrement 2
        </button>
        <button onClick={() => this.props.actions.asyncIncrement()}>
          Async Increment
        </button>
      </ComponentWithChildren>
    );
  }
}
