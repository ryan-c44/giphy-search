import React, { FunctionComponent } from 'react';

type TitleProps = {
    title: string
}

const Title: FunctionComponent<TitleProps> = ({ title }) => <aside>
    <div className="title">
        <h1>{title}</h1>
    </div>
    </aside>


export default Title;