import create from '../../assets/create.svg'

const Icon = ({category}) => {
  const icons = {
    Create: create,
  }
  return (
    <img className='icon' src={icons[category]} alt={`A ${category} icon`} />
  );
}

export default Icon;