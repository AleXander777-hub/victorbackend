<?php

//use yii\db\Schema;
use yii\db\Migration;

/**
 * Class m180112_103324_add_credit_photo
 */
class m180112_103324_add_credit_photo extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addColumn('{{%profile}}', 'photo', $this->string()->null());
        $this->addColumn('{{%profile}}', 'credit', $this->decimal(10,2)->notNull());
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropColumn('{{%profile}}', 'photo');
        $this->dropColumn('{{%profile}}', 'credit');

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180112_103324_add_credit_photo cannot be reverted.\n";

        return false;
    }
    */
}
