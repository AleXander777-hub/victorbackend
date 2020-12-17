<?php

use yii\db\Migration;

/**
 * Class m180201_112357_profile_add_refferal_id
 */
class m180201_112357_profile_add_refferal_id extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('{{%profile}}', 'referrer_id', $this->integer()->null());
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('{{%profile}}', 'referrer_id');

        return true;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180201_112357_profile_add_refferal_id cannot be reverted.\n";

        return false;
    }
    */
}
