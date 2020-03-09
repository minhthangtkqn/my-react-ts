import React from 'react';
import style from './index.module.scss';

type State = {
    displayed_time: any,
    count: number,
};

class Clock extends React.Component<any, State> {
    timer: any;

    constructor(props: any) {
        super(props);
        this.state = {
            displayed_time: (new Date()).toLocaleTimeString(),
            count: 0,
        };
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({ displayed_time: (new Date()).toLocaleTimeString() });
    }

    render() {
        const { displayed_time } = this.state;
        return (
            <div>
                <h2>
                    Current time: <span className={style['displayed-time']}>{displayed_time}</span>
                </h2>
            </div>
        );
    }
}

export default Clock;
