import { useState } from "react";

export function GoalSettingTemplate() {
    const [goal, setGoal] = useState("");
    const [importance, setImportance] = useState("");

    const potentialBlockerDescription = "List what can prevent you from achieving your goals";
    const actionPlanDescription = "List down what steps you need to reach your goals, including steps that overcome the blockers";

    return <div>
        <div className="navbar">
            <h2 className="template-title">Goal Setting Template</h2>
        </div>
        <div className="goal-setting-template-content">
            <div className="header">
                <div className="goal-content lane-left">
                    <div className="goal-header">What is your Goal?</div>
                    <div>
                        <input onChange={(e) => setGoal(e.target.value)}
                            placeholder="Write Goal" />
                    </div>
                </div>
                <div className="important-content lane-right">
                    <div className="important-header">Why is it Important?</div>
                    <div>
                        <input onChange={(e) => setImportance(e.target.value)}
                            placeholder="Explain the importance" />
                    </div>
                </div>
            </div>
            <div className="smart-topic">
                <div>Is your goal SMART?</div>
                <div>
                    <div className="smart-letter">S</div>
                    <div>
                        <div>
                            Is it specific? <input type="checkbox" />
                        </div>
                    </div>
                    <div className="smart-letter">M</div>
                    <div>
                        <div>
                            Is it measureable? <input type="checkbox" />
                        </div>
                    </div>
                    <div className="smart-letter">A</div>
                    <div>
                        <div>
                            Is it attainable? <input type="checkbox" />
                        </div>
                    </div>
                    <div className="smart-letter">R</div>
                    <div>
                        <div>
                            Is it relevant? <input type="checkbox" />
                        </div>
                    </div>
                    <div className="smart-letter">T</div>
                    <div>
                        <div>
                            Is it time-specific? <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="reason">
                <textarea placeholder="Say the reasons">
                </textarea>
            </div>
            <div className="goal-study">
                <div className="potetial-blockers">
                    <div className="goal-study__header">Potential Blockers</div>
                    <div className="goal-study__body">{potentialBlockerDescription}</div>

                </div>
                <div className="action-plan">
                    <div className="goal-study__header">Action Plan</div>
                    <div className="goal-study__body">
                        {actionPlanDescription}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}