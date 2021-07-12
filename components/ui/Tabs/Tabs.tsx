/* eslint-disable react/prop-types */
import { Tabs as AntTabs } from "antd";
import { nanoid } from "nanoid";
import React from "react";

const { TabPane } = AntTabs;

interface IPane {
  title: string;
  content: JSX.Element;
  key: string;
}

interface IProps {
  content: JSX.Element;
  tabTitle: string;
  setTabId: (value: string) => void;
}

const Tabs: React.FC<IProps> = (props) => {
  const initialValues = [
    {
      title: props.tabTitle,
      content: props.content,
      key: nanoid(),
    },
  ];

  const [activeKey, setActiveKey] = React.useState(initialValues[0].key);
  const [panes, setPanes] = React.useState<IPane[]>(initialValues);

  const onChange = (activeKey: React.SetStateAction<string>) => {
    setActiveKey(activeKey);
  };

  const onEdit = (targetKey: any, action: "add" | "remove") => {
    action === "add" ? add() : remove(targetKey);
  };

  const add = () => {
    const activeKey = nanoid();
    const newPanes = [...panes];
    newPanes.push({
      title: props.tabTitle,
      content: props.content,
      key: activeKey,
    });
    setPanes(newPanes);
    setActiveKey(activeKey);
    props.setTabId(activeKey);
  };

  const remove = (targetKey: any) => {
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
    props.setTabId(targetKey);
    setActiveKey(newActiveKey);
  };

  return (
    <AntTabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit} size="small">
      {panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key} closable>
          {pane.content}
        </TabPane>
      ))}
    </AntTabs>
  );
};

export default Tabs;
