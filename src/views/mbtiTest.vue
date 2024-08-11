<template>
    <div class="test">
        <div class="front">
            <h1>MBTI人格测试</h1>
            <h2>“终于被理解的感觉真好”</h2>
            <h4>只需十分钟，就能“惊人般准确”地描述出你是谁，以及你为何以这样的方式行事。</h4>
            <hr>
        </div>
        <div class="testbody">
            <div v-for="(question, index) in questions" :key="index">
                <p>{{ question.text }}</p>
                <div v-for="(option, idx) in question.options" :key="idx">
                    <button v-for="(circle, idy) in option.circles" :key="idy"
                        :style="{ borderColor: option.color, width: circle.size, height: circle.size }"
                        :value="option.value" @click="selectOption(index, option.type, idy)">
                        {{ option.text }}
                    </button>
                </div>
            </div>
        </div>
        <h3>
            <button @click="handleSubmit">提交</button>
        </h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            answers: {},
            questions: [
                {
                    text: "你经常交新朋友。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "复杂新颖的想法比简单轻松的想法更让你兴奋。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }], value: 3 },
                        { type: "agree", color: 'green', circles: [{ size: '30px' }], value: 2 },
                        { type: "agree", color: 'green', circles: [{ size: '20px' }], value: 1 },
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }], value: 0 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }], value: -1 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }], value: -2 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }], value: -3 },
                    ]
                },
                {
                    text: "你通常更容易被让你有感情共鸣的东西说服，而不是事实观点。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你的生活与工作空间整洁有序。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你通常会保持冷静，即使在很大的压力下。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你认为与陌生人打交道，或者向陌生人推销自己的想法令人望而生畏。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你能有效地安排任务的优先次序和计划，通常能在截止日期前完成任务。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "对你而言，人们的故事和感情比任何数字或数据都更具说服力。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你喜欢使用日程表和清单等组织工具。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "即使是一个小错误也会让你怀疑自己的整体能力和知识水平。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "走到你觉得有趣的人身边，然后开始一段谈话，这会让你感觉很舒服",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你对讨论创意作品的各种解读不太感兴趣。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "在确定行动方案时，你优先考虑事实而不是人们的感受。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你经常在毫无计划的情况下开展一天的工作。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你很少担心你是否给人留下好印象。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你喜欢参加团体活动。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你喜欢尝试未经检验的新方法。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: "你更注重敏感，而不是完全诚实。",
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }],value:3},
                        { type: "agree", color: 'green', circles: [{ size: '30px' }],value:2},
                        { type: "agree", color: 'green', circles: [{ size: '20px' }],value:1},
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }],value:0},
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }],value:-1},
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }],value:-2},
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }],value:-3},
                    ]
                },
                {
                    text: '你积极寻求探索新的体验和知识领域',
                    options: [
                        { type: "agree", color: 'green', circles: [{ size: '40px' }], value: 3 },
                        { type: "agree", color: 'green', circles: [{ size: '30px' }], value: 2 },
                        { type: "agree", color: 'green', circles: [{ size: '20px' }], value: 1 },
                        { type: "neutral", color: 'gray', circles: [{ size: '30px' }], value: 0 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '20px' }], value: -1 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '30px' }], value: -2 },
                        { type: 'disagree', color: 'purple', circles: [{ size: '40px' }], value: -3 },
                    ]
                }
            ],
        };
    },
    methods: {
        selectOption(questionIndex, optionType, circleIndex) {
            console.log('Question:', questionIndex, 'Option:', optionType, 'Circle:', circleIndex);
        },
        // document,getElementById('questions').addEventListener'options',function(event){
        //     event.preventDefault();
        //     const answers = {};
        //     const questions = document.querySelectorAll('.question');
    }
}

</script>

<style>
.front {
    color: black;
}

.front h1 {
    text-align: center;
}

.testbody p {
    text-align: center;
}

button {
    border-width: 3px;
    border-style: solid;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>