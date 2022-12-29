import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Home() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>未回答</Tab>
        </TabList>

        <TabPanel>
          <h2>ここに未回答のテスト一覧</h2>
        </TabPanel>
      </Tabs>
    </>
  )
}
