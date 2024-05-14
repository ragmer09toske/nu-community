'use client'
import { timelineResourceData } from '@/components/datasource';
import {
  Week, Month, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';

export default function Scheduler() {
  const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }
  const group = { byGroupID: false, resources: ['Projects', 'Categories'] }

  const projectData: Object[] = [
    { text: 'Codiac 1', id: 1, color: '#cb6bb2' },
    { text: 'Codiac 2', id: 2, color: '#56ca85' },
    { text: 'Codiac 3', id: 3, color: '#df5286' },
  ];
  const categoryData: Object[] = [
    { text: '', id: 1, color: '#1aaa55' },
    { text: '', id: 2, color: '#7fa900' }
  ];
  return (
    <div className='h-screen'>
      {/* <h2>Syncfusion React Schedule Component</h2> */}
      <ScheduleComponent width='100%' height='100%' currentView='Month'  eventSettings={eventSettings} group={group} >
        <ViewsDirective>
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false}
            dataSource={projectData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
          <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true}
            dataSource={categoryData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}