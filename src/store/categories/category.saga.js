import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesField } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocument, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesField(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSage() {
    yield all([call(onFetchCategories)]);
}