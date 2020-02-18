import React from 'react';
import { Button } from 'antd';

class Grid extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Hello</Button>
                <div className="text-red">HELLO</div>
            </div>
        );
    }
}

export default Grid;
