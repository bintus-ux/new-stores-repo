import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAIL,
} from '../constants/productConstants'

export const listProductItems =
  (pageNumber = '', category) =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })

      const { data } = await axios.get(
        `https://bintus-ecommerce-store-application.onrender.com/api/product?pageNumber=${pageNumber}&category=${category}`
      )
      console.log(data)
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
export const searchProducts = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SEARCH_REQUEST })

    const { data } = await axios.get(
      `https://bintus-ecommerce-store-application.onrender.com/api/product/search/${keyword}`
    )
    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(
      `https://bintus-ecommerce-store-application.onrender.com/api/product/${id}`
    )
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
