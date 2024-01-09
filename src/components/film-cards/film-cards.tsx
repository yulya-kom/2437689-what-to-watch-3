import {FilmCard} from '../film-card/film-card.tsx';
import {FilmType} from '../../types/films.ts';

type FilmCardsProps = {
  films: FilmType[];
};

export function FilmCards({ films }: FilmCardsProps): JSX.Element {
  let noFilmsText = (films.length === 0) ? "No films" : ""

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
      {noFilmsText}
    </div>
  );
}
