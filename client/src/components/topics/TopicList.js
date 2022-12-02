import TopicShow from './TopicShow';

const TopicList = ({ topics, updateTopic, deleteTopic }) => (
  <>
    { topics.map( t => 
      <TopicShow 
        key={t.id}
        {...t}
        updateTopic={updateTopic}
        deleteTopic={deleteTopic}
      />
    )}
  </>
)

export default TopicList;