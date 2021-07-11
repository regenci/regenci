/* eslint-disable no-unused-vars */
import React from "react";
import { Tabs, Form } from "antd";
import EditorEducationDataForm from "./education-form";
import { nanoid } from "nanoid";

const { TabPane } = Tabs;

interface IPane {
  title: string;
  content: JSX.Element;
  key: string;
}

const EducationDataEditorContent = () => {
  const initialValues = [
    {
      title: "Education",
      content: <EditorEducationDataForm />,
      key: nanoid(),
    },
  ];
  const [activeKey, setActiveKey] = React.useState(initialValues[0].key);
  const [panes, setPanes] = React.useState<IPane[]>(initialValues);

  const onChange = (activeKey: React.SetStateAction<string>) => {
    setActiveKey(activeKey);
  };

  const onEdit = (targetKey: any, action: any) => {
    action === "add" ? add() : remove(targetKey);
  };
  console.log(panes);

  const add = () => {
    const activeKey = nanoid();
    const newPanes = [...panes];
    newPanes.push({
      title: "Education",
      content: <EditorEducationDataForm />,
      key: activeKey,
    });
    setPanes(newPanes);
    setActiveKey(activeKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex !== undefined && lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };
  return (
    <Form onFinish={(values) => console.log(values)}>
      <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} size="small">
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
      <button type="submit">submit</button>
    </Form>
  );
};

export default EducationDataEditorContent;
