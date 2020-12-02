import DatePicker from 'vue2-datepicker-keyup';
import he from 'date-format-parse/lib/locale/he';

const lang = {
  formatLocale: he,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('he', lang);

export default lang;
