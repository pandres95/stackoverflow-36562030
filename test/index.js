'use strict';

describe('QuestionSet', () => {
    const   setter = require('..')
    ,       expect = require('expect.js');

    it('Place default inputs', () => {
        const defaultInputs = {
            text: 'some entered text',
            textarea: 'some more entered text'
        };

        var reply = {
            questionSets: [
                {
                    questionSetId: 'example-fields',
                    questions: [
                        {
                            questionId: 'text',
                            question: 'Text Field',
                            input: {
                                type: 'textInput',
                                default: ''
                            },
                        },
                        {
                            questionId: 'textarea',
                            question: 'Text Area',
                            input: {
                                type: 'textareaInput',
                                default: ''
                            }
                        }
                    ]
                }
            ]
        };
        var expectedReply = {
            questionSets: [
                {
                    questionSetId: 'example-fields',
                    questions: [
                        {
                            questionId: 'text',
                            question: 'Text Field',
                            input: {
                                type: 'textInput',
                                default: 'some entered text'
                            },
                        },
                        {
                            questionId: 'textarea',
                            question: 'Text Area',
                            input: {
                                type: 'textareaInput',
                                default: 'some more entered text'
                            }
                        }
                    ]
                }
            ]
        };

        expect(setter(defaultInputs, reply)).to.eql(expectedReply);
    });

});
