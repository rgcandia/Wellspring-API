// En handle_get_form.js
const { Form, Modelform } = require('../../db.js');

module.exports = async (req, res) => {
  const { user } = req.params;

  try {
    const forms = await Form.findAll({
      where: {
        email: user,
      },
    });

    const modelforms = await Modelform.findAll({
      where: {
        email: user,
      },
    });

    const result = {
      forms,
      modelforms,
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
