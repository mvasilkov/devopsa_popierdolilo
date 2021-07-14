import React from 'react'
import Head from 'next/head'

import QuestionForm from '../components/QuestionForm'
import QuestionList from '../components/QuestionList'

export default class StartPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { questions: [] }
    }

    componentDidMount() {
        this.refresh()
    }

    refresh = async () => {
        const response = await fetch('/api/questions')
        const questions = await response.json()
        this.setState({ questions })
    }

    render() {
        const { questions } = this.state

        return (
            <React.Fragment>
                <Head>
                    <title>Sneed's Overflow (Formerly Chuck's)</title>
                </Head>
                <h1>Sneed's Overflow (Formerly Chuck's)</h1>
                <QuestionForm refresh={this.refresh} />
                <QuestionList questions={questions} refresh={this.refresh} />
            </React.Fragment>
        )
    }
}
