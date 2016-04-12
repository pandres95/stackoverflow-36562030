'use strict';

let _ = require('underscore');

module.exports = function (defaultInputs, reply) {

    reply.questionSets = _.map(reply.questionSets, questionSet => {
        questionSet.questions = _.map(questionSet.questions, question => {
            question.input.default = _.find(defaultInputs,(item, key) => (
                new RegExp(`${key}Input`).test(question.input.type) && item

            ) || false) || '';

            return question;
        });
        return questionSet;
    });

    return reply;
};
