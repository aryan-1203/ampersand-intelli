import * as Yup from 'yup';

const shareholderSchema = Yup.object().shape({
  name: Yup.string()
    .required('Shareholder name is required')
    .min(2, 'Shareholder name must be at least 2 characters long'),
  percentage: Yup.number()
    .required('Holding percentage is required')
    .positive('Holding percentage must be a positive number')
    .max(100, 'Holding percentage cannot exceed 100%')
    .typeError('Holding percentage must be a number'),
  type: Yup.string().required('Type is required'),
});

const validationSchema = Yup.object().shape({
  shareholders: Yup.array()
    .of(shareholderSchema)
    .test(
      'total-percentage',
      'The total holding percentage cannot exceed 100%',
      function (value) {
        const totalPercentage = value.reduce((acc, curr) => acc + Number(curr.percentage), 0);
        return totalPercentage <= 100;
      }
    ),
});

export { validationSchema };
