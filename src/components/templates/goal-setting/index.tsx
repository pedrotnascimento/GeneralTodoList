import { useState } from "react";
import "./goalSettingTemplateStyle.scss";
import { Input } from "antd";
import Title from "antd/es/typography/Title";
import { styled } from "styled-components";
import { LetterCard } from "./LetterCard";

const Card = styled.div`
border: gray solid 2px;
border-radius: 10px;
padding: 0 5px;
margin: 0 2px;
`;

const LetterSmart = styled(Card)`
background-color: ${(props) => props.color || "black"};
`;

const GoalLane = styled.div`
width:50%;
background-color: ${(props: any) => props.$backgroundColor || "transparent"};
padding: 5px;
`;



export function GoalSettingTemplate() {
    const [goal, setGoal] = useState("");
    const [importance, setImportance] = useState("");

    const potentialBlockerDescription = "List what can prevent you from achieving your goals";
    const actionPlanDescription = "List down what steps you need to reach your goals, including steps that overcome the blockers";

    const letters = [
        {
            letter: 'S',
            description: 'Is it specific?',
            color: "#5da8ae"
        },
        {
            letter: 'M',
            description: 'Is it measureable?',
            color: "#348f86"
        },
        {
            letter: 'A',
            description: 'Is it attainable?',
            color: "#b21935"
        },
        {
            letter: 'R',
            description: 'Is it relevant?',
            color: "#449a1f"
        },
        {
            letter: 'T',
            description: 'Is it time-specific?',
            color: "#bd2766"
        },
    ];

    return <div>
        <div className="navbar">
            <Title className="template-title">Goal Setting Template</Title>
        </div>
        <div className="goal-setting-template-content">
            <div className="lanes goal-header">
                <GoalLane $backgroundColor={"#00a4ef"}>
                    <div className="lane-form">
                        <div className="goal-header">What is your Goal?</div>
                        <div>
                            <Input onChange={(e) => setGoal(e.target.value)}
                                placeholder="Write Goal" />
                        </div>
                    </div>
                </GoalLane>
                <GoalLane $backgroundColor={"#6ab43e"}>
                <div className="lane-form">
                    <div className="important-header">Why is it Important?</div>
                    <div>
                        <Input onChange={(e) => setImportance(e.target.value)}
                            placeholder="Explain the importance" />
                    </div>
                    </div>
                </GoalLane>
            </div>
            <div className="smart-topic">
                <LetterSmart className="smart-letter-content">
                    Is your goal SMART?</LetterSmart>
                {letters.map((c) => {
                    return <LetterSmart color={c.color}>
                        <LetterCard {...c} />
                    </LetterSmart>;
                })}
            </div>
            <div className="reason">
                <Input.TextArea placeholder="Say the reasons for ">
                </Input.TextArea>
            </div>
            <div className="lanes goal-study">
                <GoalLane $backgroundColor={"#00a4ef"}>
                    <div className="goal-study__header">Potential Blockers</div>
                    <div className="goal-study__body">{potentialBlockerDescription}</div>

                </GoalLane>
                <GoalLane $backgroundColor={"#6ab43e"}>
                    <div className="goal-study__header">Action Plan</div>
                    <div className="goal-study__body">
                        {actionPlanDescription}
                    </div>
                </GoalLane>
            </div>
        </div>
    </div>;
}