module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn('products', 'fk_shop_id', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'shops',
    //     key: 'id'
    //   }
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'fk_shop_id');
  }
};
