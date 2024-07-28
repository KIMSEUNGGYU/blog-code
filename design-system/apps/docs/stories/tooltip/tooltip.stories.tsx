import type { Meta, StoryObj } from '@storybook/react';
import type {
  TooltipContentProps} from '@acme/ui/components';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@acme/ui/components';
import { IconInfo } from './IconInfo'

const meta: Meta<typeof TooltipProvider> = {
  title: 'DS/Tooltip',
  component: TooltipProvider,
  args: {},
  decorators: [(Story) => <TooltipProvider delayDuration={0}>{Story()}</TooltipProvider>],
};
export default meta;

type Story = StoryObj<typeof TooltipProvider>;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button type='button'>Hover</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    );
  },
};

export const Normal: Story = {
  render: () => {
    const mode = 'normal';
    const titleText = 'Title text / 최대 1줄 작성(공백 포함 26자)';
    const bodyText = 'Body text / 최대 1줄 작성(공백 포함 26자)';
    return (
      <>
        {/* 기본 */}
        <div className="flex justify-center">
          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip mode={mode} placement="top">
              <TooltipContent.Body>{bodyText}</TooltipContent.Body>
            </TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip className="flex flex-col gap-1" mode={mode} placement="top">
              <TooltipContent.Title>{titleText}</TooltipContent.Title>
              <TooltipContent.Body>
                Body text (long ver) /<br />
                작성 제한 없음
              </TooltipContent.Body>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* 기본 + 추가 */}
        <div className="mt-56 flex justify-center">
          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip mode={mode} placement="top">
              <TooltipContent.Body>{bodyText} + 여러 글자를 추가하면 어떻게 될까????</TooltipContent.Body>
            </TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip className="flex flex-col gap-1" mode={mode} placement="top">
              <TooltipContent.Title>
                <span className="truncate">{titleText} + 여러 글자를 추가하면 어떻게 될까????</span>
              </TooltipContent.Title>

              <TooltipContent.Body>
                Body text (long ver) /<br />
                작성 제한 없음 + 여러 글자를 추가하면 어떻게 될까????
              </TooltipContent.Body>
            </TooltipContent>
          </Tooltip>
        </div>
      </>
    );
  },
};

export const Tutorial: Story = {
  render: () => {
    const mode = 'tutorial';
    const bodyText = 'Body text / 최대 4줄 작성 / max text width : 264px';
    const titleText = 'Title text / 최대 2줄 작성(1줄 권장)';
    return (
      <>
        <div className="flex justify-center">
          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip mode={mode} placement="top">
              <TooltipContent.Body>{bodyText}</TooltipContent.Body>
            </TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip className="flex flex-col gap-1" mode={mode} placement="top">
              <TooltipContent.Title icon={<IconInfo />}>
                {titleText} <br />
                {titleText}
              </TooltipContent.Title>

              <TooltipContent.Body>
                {bodyText} <br />
                {bodyText}
              </TooltipContent.Body>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="mt-56 flex justify-center">
          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip mode={mode} placement="top">
              <TooltipContent.Body>{bodyText} + 여러 글자를 추가하면 어떻게 될까????</TooltipContent.Body>
            </TooltipContent>
          </Tooltip>

          <Tooltip open>
            <TooltipTrigger asChild className="m-auto cursor-pointer">
              <span />
            </TooltipTrigger>
            <TooltipContent arrowTip className="flex flex-col gap-1" mode={mode} placement="top">
              <TooltipContent.Title icon={<IconInfo />}>
                {titleText} + 여러 글자를 추가 <br />
                {titleText} + 여러 글자를 추가하면 어떻게 될까????
              </TooltipContent.Title>

              <TooltipContent.Body>
                {bodyText} + 여러 글자를 추가하면 어떻게 될까???? <br />
                {bodyText} + 여러 글자를 추가하면 어떻게 될까????
              </TooltipContent.Body>
            </TooltipContent>
          </Tooltip>
        </div>
      </>
    );
  },
};

// Examples
export const NormalExample: Story = {
  render: () => {
    const mode = 'normal';
    const titleText = 'Title text / 최대 1줄 작성(공백 포함 26자)';
    const bodyText = 'Body text / 최대 1줄 작성(공백 포함 26자)';

    function renderNormalItem(placement?: TooltipContentProps['placement']) {
      return (
        <Tooltip>
          <TooltipTrigger asChild className="m-auto cursor-pointer">
            <span>{(placement ?? 'NO ARROW').toUpperCase()}</span>
          </TooltipTrigger>
          <TooltipContent arrowTip={Boolean(placement)} mode={mode} placement={placement}>
            <TooltipContent.Body>{bodyText}</TooltipContent.Body>
          </TooltipContent>
        </Tooltip>
      );
    }

    function renderNormalTitleItem(placement?: TooltipContentProps['placement']) {
      return (
        <Tooltip>
          <TooltipTrigger asChild className="m-auto cursor-pointer">
            <span>{(placement ?? 'NO ARROW').toUpperCase()}</span>
          </TooltipTrigger>
          <TooltipContent arrowTip={Boolean(placement)} className="flex flex-col gap-1" mode={mode} placement={placement}>
            <TooltipContent.Title>{titleText}</TooltipContent.Title>
            <TooltipContent.Body>{bodyText}</TooltipContent.Body>
          </TooltipContent>
        </Tooltip>
      );
    }

    return (
      <div className="flex justify-around">
        {/* 기본 */}
        <div className="flex flex-col gap-10">
          {renderNormalItem('right')}
          {renderNormalItem('left')}
          {renderNormalItem('top')}
          {renderNormalItem('bottom')}
          {renderNormalItem()}
        </div>

        <div className="flex flex-col gap-20">
          {renderNormalTitleItem('right')}
          {renderNormalTitleItem('left')}
          {renderNormalTitleItem('top')}
          {renderNormalTitleItem('bottom')}
          {renderNormalTitleItem()}
        </div>
      </div>
    );
  },
};

export const TutorialExample: Story = {
  render: () => {
    const mode = 'tutorial';
    const bodyText = 'Body text / 최대 4줄 작성 / max text width : 264px';
    const titleText = 'Title text / 최대 2줄 작성(1줄 권장)';

    function renderTutorialItem(placement?: TooltipContentProps['placement']) {
      return (
        <Tooltip>
          <TooltipTrigger asChild className="m-auto cursor-pointer">
            <span>{(placement ?? 'NO ARROW').toUpperCase()}</span>
          </TooltipTrigger>
          <TooltipContent arrowTip={Boolean(placement)} mode={mode} placement={placement}>
            <TooltipContent.Body>{bodyText}</TooltipContent.Body>
          </TooltipContent>
        </Tooltip>
      );
    }

    function renderTutorialTitleItem(placement?: TooltipContentProps['placement']) {
      return (
        <Tooltip>
          <TooltipTrigger asChild className="m-auto cursor-pointer">
            <span>{(placement ?? 'NO ARROW').toUpperCase()}</span>
          </TooltipTrigger>
          <TooltipContent arrowTip={Boolean(placement)} className="flex flex-col gap-1" mode={mode} placement={placement}>
            <TooltipContent.Title>{titleText}</TooltipContent.Title>
            <TooltipContent.Body>{bodyText}</TooltipContent.Body>
          </TooltipContent>
        </Tooltip>
      );
    }

    return (
      <div className="flex justify-around">
        {/* 기본 */}
        <div className="flex flex-col gap-10">
          {renderTutorialItem('right')}
          {renderTutorialItem('left')}
          {renderTutorialItem('top')}
          {renderTutorialItem('bottom')}
          {renderTutorialItem()}
        </div>

        <div className="flex flex-col gap-20">
          {renderTutorialTitleItem('right')}
          {renderTutorialTitleItem('left')}
          {renderTutorialTitleItem('top')}
          {renderTutorialTitleItem('bottom')}
          {renderTutorialTitleItem()}
        </div>
      </div>
    );
  },
};

export const CustomExample: Story = {
  render: () => {
    return (
      <Tooltip>
          <TooltipTrigger asChild className="m-auto cursor-pointer">
            <span>TRIGGER</span>
          </TooltipTrigger>
          <TooltipContent mode="tutorial">
            {/* Title Custom */}
            {/* 1 */}
            {/* <div className="flex gap-1">
              <IconInfo />
              <p className="T2_700">Title text / 최대 2줄 작성(1줄 권장)</p>
            </div> */}

            {/* 2. 말줄임표 */}
            <div className="flex gap-1">
              <IconInfo className="min-w-5" />
              <p className="T2_700 truncate">
                Title text / 최대 2줄 작성(1줄 권장) Title text / 최대 2줄 작성(1줄 권장)
              </p>
            </div>

            {/* Body Custom */}
            <p className="B1">Body text / 최대 4줄 작성 / max text width : 264px</p>
            <p className="B1">Body text / 최대 4줄 작성 / max text width : 264px</p>
          </TooltipContent>
        </Tooltip>
    );
  },
};
