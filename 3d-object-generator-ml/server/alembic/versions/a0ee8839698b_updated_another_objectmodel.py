"""Updated another ObjectModel

Revision ID: a0ee8839698b
Revises: 39abe788d656
Create Date: 2024-10-25 13:35:27.635406

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'a0ee8839698b'
down_revision: Union[str, None] = '39abe788d656'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_objects_id', table_name='objects')
    op.drop_table('objects')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('objects',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.Column('description', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('vertices', postgresql.JSON(astext_type=sa.Text()), autoincrement=False, nullable=False),
    sa.Column('file_url', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='objects_pkey')
    )
    op.create_index('ix_objects_id', 'objects', ['id'], unique=False)
    # ### end Alembic commands ###
