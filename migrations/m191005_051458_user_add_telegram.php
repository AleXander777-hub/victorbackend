<?php

use yii\db\Migration;

/**
 * Class m191005_051458_user_add_telegram
 */
class m191005_051458_user_add_telegram extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addColumn('{{%user}}', 'tel_username', $this->string(255)->null());
        $this->addColumn('{{%user}}', 'tel_id', $this->bigInteger(255)->null());
        $this->createIndex(
            'idx-user-tel_id',
            'user',
            'tel_id'
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropColumn('{{%user}}', 'tel_username');
        $this->dropColumn('{{%user}}', 'tel_id');
        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191005_051458_user_add_telegram cannot be reverted.\n";

        return false;
    }
    */
}
