import { ReactComponent as StarFull} from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf} from 'assets/img/stat-half.svg';
import { ReactComponent as StarEmpty} from 'assets/img/star-empty.svg';
import './style.css';

function MovieStarts() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}

export default MovieStarts;