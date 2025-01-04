import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SubcategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      category_id: '',
      description: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      category_id: Yup.string().required('Category ID is required'),
      description: Yup.string().required('Description is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('category_id', values.category_id);
      formData.append('description', values.description);
      formData.append('image', values.image);

      const headers = {
        Accept: 'application/json',
        Authorization: 'Bearer 15|hcx5GycsrFN9CYvEnUUmJrjgcNnWiAUscCZJhJ6pa93eab1f',
      };

      axios
        .post('mmdev.mindsmaking.com/api/editor/add-subcategories', formData, { headers })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <div className="max-w-lg mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Add Subcategory</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category ID</label>
          <input
            type="text"
            name="category_id"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.category_id}
          />
          {formik.errors.category_id && formik.touched.category_id && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.category_id}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            onChange={(event) => {
              formik.setFieldValue('image', event.currentTarget.files[0]);
            }}
          />
          {formik.errors.image && formik.touched.image && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.image}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubcategoryForm;
