import SubShow from './SubShow';

const SubList = ({ subs, updateSub, deleteSub }) => (
  <>
    { subs.map( s => 
      <SubShow
        key={s.id}
        {...s} // spread out the content of the sub
        // id={s.id} title={s.title} created_at={s.created_at} updated_at={s.updated_at}
        updateSub={updateSub}
        deleteSub={deleteSub}
      />
    )}
  </>
)

export default SubList;