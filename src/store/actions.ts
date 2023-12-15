import { createAction } from '@reduxjs/toolkit';
import {AuthorizationStatus, Genres} from '../utils/consts.ts';
import {FilmType, PromoFilmType, FilmCardType} from '../types/films.ts';

export const loadFilm = createAction<FilmType | null>('films/loadFilm');
export const loadPromoFilm = createAction<PromoFilmType>('films/loadPromoFilm');
export const loadAllFilms = createAction<FilmCardType[]>('data/loadAllFilms');
export const setFilmByGenre = createAction<{ genre: Genres }>('films/setFilmsByGenre');
export const setGenre = createAction('films/setGenre');
export const setCount = createAction<{ count: number }>('films/setCount');
export const setFilmsDisplayed = createAction('films/setFilmsDisplayed');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserImage = createAction<string>('user/image');
export const setError = createAction<string | null>('films/error');
